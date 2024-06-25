package main

import (
	"fmt"
	"time"

	"github.com/handy-golang/go-tools/m_cycle"
	"github.com/handy-golang/go-tools/m_time"
	"github.com/otter-trade/coin-candle/exchange_api"
	"github.com/otter-trade/coin-candle/global"
)

func main() {

	// 初始化项目配置
	global.SysInit(global.SysInitOpt{
		LogPath:   "",                                 // 日志文件存放目录，缺省值：./logs
		DataPath:  "",                                 // 数据文件存放目录，缺省值：./data
		ProxyURLs: []string{"http://127.0.0.1:10809"}, // 在拉取交易所数据时使用的代理池,没有代理则直接向交易所发起请求，国内可能会失败
	})

	// 启动本地数据的定时更新
	m_cycle.New(m_cycle.Opt{
		Func: func() {

			exchange_api.UpdateLocalGoodsList() // 更新商品列表至本地
			exchange_api.UpdateLocalTicker()    // 更新榜单数据至本地
		},
		SleepTime: time.Hour * 4, // 每4小时执行一次更新
	}).Start()

	// ####### 获取商品列表 #######
	GoodsList, err := exchange_api.GetGoodsList()
	if err != nil {
		fmt.Println("获取商品列表失败", err)
	}
	fmt.Println("GoodsList 商品总数:", len(GoodsList))

	// ####### 获取商品详情 #######
	GoodsDetail, err := exchange_api.GetGoodsDetail(exchange_api.GetGoodsDetailOpt{
		GoodsId: "BTC-USDT",
	})
	if err != nil {
		fmt.Println("获取商品详情失败", err)
	}
	fmt.Println("GoodsDetail 最后更新时间", GoodsDetail.GoodsId, GoodsDetail.UpdateStr)

	// ####### 获取榜单数据  #######
	TickerList, err := exchange_api.GetTickerList()
	if err != nil {
		fmt.Println("获取榜单数据失败", err)
	}
	fmt.Println("TickerList 今日上榜币种数量:", len(TickerList))

	// ####### K线数据 #######
	// time := m_time.TimeParse(m_time.LaySP_ss, "2023-05-06 18:56:43")
	time := m_time.TimeParse(m_time.LaySP_ss, "2024-05-21 18:55:43")
	// time := m_time.GetUnixInt64()
	klineMap, err := exchange_api.GetKline(global.GetKlineOpt{
		GoodsId:  "BTC-USDT",
		Bar:      "1m",                       // 允许值 1m  5m  15m  30m  1h
		EndTime:  time,                       //13 位毫秒时间戳
		Limit:    320,                        // 1-500 的正整数
		Exchange: []string{"okx", "binance"}, // 需要请求的交易所， 目前只支持 okx 和 binance
	})

	if err != nil {
		fmt.Println("获取K线数据失败", err)
	}
	fmt.Println("kline 总长度", len(klineMap["binance"]))
}
