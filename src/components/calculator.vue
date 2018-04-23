<template>
<div>
    <p><h2>p2p年化收益计算器</h2></p>
    <hr>
    <div>总收入: <span style="font-size: 1.5rem; color:red">￥{{earnMoney}}</span>  .
        年化: <span style="font-size: 1.5rem; color:red">{{yearsPercent}}</span> %</div>
    <table>
        <tr>
            <td>金额</td>
            <td>
                <Input @on-change="calc" v-model="cash" style="width:5rem;">
                </Input>
            </td>
            <td>
                <RadioGroup v-model="cash" @on-change="calc">
                    <Radio v-for="item in cashPre" :label="item.money"><span>{{item.title}}</span></Radio>
                </RadioGroup>
            </td>
        </tr>
        <tr>
            <td>利息</td>
            <td>
                <Input @on-change="calc" v-model="rate" style="width:5rem;">
                    <span slot="append">%</span>
                </Input>
            </td>
            <td>
                <RadioGroup v-model="rate" @on-change="calc">
                    <Radio v-for="item in ratePre" :label="item"><span>{{item}}%</span></Radio>
                </RadioGroup>
            </td>
        </tr>
        <tr>
            <td>期限</td>
            <td>
                <Input @on-change="calc" v-model="timeReal" style="width:5rem;">
                </Input>
            </td>
            <td>
                <RadioGroup v-model="timeRate" @on-change="calc">
                    <Radio v-for="(item,key) in timeRatePre" :label="key"><span>{{item}}</span></Radio>
                </RadioGroup>
            </td>
        </tr>
        <tr>
            <td>返现</td>
            <td>
                <Input @on-change="calc" v-model="reward" style="width:5rem;">
                </Input>
            </td>
            <td>
                &nbsp;
            </td>
        </tr>
        <tr>
            <td>抵扣</td>
            <td>
                <Input @on-change="calc" v-model="redbag" style="width:5rem;">
                </Input>
            </td>
            <td>
                &nbsp;
            </td>
        </tr>
    </table>
</div>
</template>
<script>
    export default {
        data () {
            return {
                cash: 1000,
                cashPre:[
                    {"money":100, "title":"1百"},
                    {"money":200, "title":"2百"},
                    {"money":500, "title":"5百"},
                    {"money":1000, "title":"1千"},
                    {"money":2000, "title":"2千"},
                    {"money":3000, "title":"3千"},
                    {"money":5000, "title":"5千"},
                    {"money":8000, "title":"8千"},
                    {"money":10000, "title":"1万"},
                    {"money":20000, "title":"2万"},
                    {"money":50000, "title":"5万"},
                    {"money":100000, "title":"10万"}
                ],
                rate: 8,
                ratePre:[
                    5,
                    5.8,
                    6,
                    6.5,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    15,
                    16,
                    20
                ],
                timeReal:1,
                timeRate:"month",
                timeRatePre:{
                    month:"月",
                    day:"日",
                    year:"年",
                },
                reward:0,
                redbag:0,
                yearsPercent:0,
                earnMoney:0,
            }
        },
        mounted(){
            this.calc()
        },
        methods: {
            calc(){
                if (!this.cash || !this.timeReal) {
                    this.$Message.error("金额和期限必填");
                    return false
                }
                if (!this.rate) {
                    this.rate = 0
                }
                if (!this.reward) {
                    this.reward = 0
                }
                if (!this.redbag) {
                    this.redbag = 0
                }
                var rateMoney = 0; // 利息总收入
                var rewardTotal = 0; // 实际收入
                var rewardYears = 0; // 折合年收入
                if (this.timeRate=="month") {
                    // 利息总收入
                    rateMoney = (this.cash * this.rate/100 * this.timeReal/12)
                    // 利息+奖励+红包 的总额
                    rewardTotal = rateMoney + parseFloat(this.reward) + parseFloat(this.redbag)
                    // 折合年收入
                    rewardYears = rewardTotal / this.timeReal * 12
                } else if (this.timeRate=="day") {
                    // 利息总收入
                    rateMoney = (this.cash * this.rate/100 * this.timeReal/365)
                    // 利息+奖励+红包 的总额
                    rewardTotal = rateMoney + parseFloat(this.reward) + parseFloat(this.redbag)
                    // 折合年收入
                    rewardYears = rewardTotal / this.timeReal * 365
                } else {
                    // 利息总收入
                    rateMoney = this.cash * this.rate/100 * this.timeReal
                    // 利息+奖励+红包 的总额
                    rewardTotal = rateMoney + parseFloat(this.reward) + parseFloat(this.redbag)
                    // 折合年收入
                    rewardYears = rewardTotal / this.timeReal
                    // console.log(rateMoney, rewardTotal, rewardYears)
                }

                // 年化
                this.earnMoney = rewardTotal.toFixed(2)
                this.yearsPercent = (rewardYears / this.cash * 100).toFixed(2)
            },
        },
    }
</script>
