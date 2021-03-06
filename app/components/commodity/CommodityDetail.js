/**
 *  Class: CommodityDetail
 *  Author: Niu Xiaoyu
 *  Date: 16/2/5.
 *  Description: 商品详情
 */
const mockData_commoditySummary = [
  {
    id: '1',
    portrait: require('../../../assets/portrait.jpg'),
    thumbs: [
      require('../../../assets/sampleImage/img1.jpg'),
      require('../../../assets/sampleImage/img2.jpg'),
      require('../../../assets/sampleImage/img3.jpg'),
      require('../../../assets/sampleImage/img4.jpg')
    ],
    publisher: '张三',
    publish_time: '2016-1-2',
    price: '410',
    summary: '酷冷至尊（CoolerMaster） 烈焰枪 红轴 游戏机械键盘 台湾制造 优良血统 紧凑布局;酷冷至尊（CoolerMaster） 烈焰枪 红轴 游戏机械键盘 台湾制造 优良血统 紧凑布局'
  },
  {
    id: '2',
    portrait: require('../../../assets/portrait.jpg'),
    thumbs: [
      require('../../../assets/sampleImage/img1.jpg'),
      require('../../../assets/sampleImage/img2.jpg'),
      require('../../../assets/sampleImage/img3.jpg'),
      require('../../../assets/sampleImage/img4.jpg')
    ],
    publisher: '李四',
    publish_time: '2015-11-2',
    price: '900',
    summary: '苏泊尔（SUPOR）32cm二代火红点不粘无油烟炒锅炒菜锅明火电磁炉通'
  },
  {
    id: '3',
    portrait: require('../../../assets/portrait.jpg'),
    thumbs: [
      require('../../../assets/sampleImage/img1.jpg'),
      require('../../../assets/sampleImage/img2.jpg'),
      require('../../../assets/sampleImage/img3.jpg'),
      require('../../../assets/sampleImage/img4.jpg')
    ],
    publisher: '王五',
    publish_time: '2016-1-5',
    price: '50',
    summary: '双立人锅具刀具12件套装 铸铁炖锅 煎锅蒸锅炊具 不锈钢色 锅具套装'
  },
  {
    id: '4',
    portrait: require('../../../assets/portrait.jpg'),
    thumbs: [
      require('../../../assets/sampleImage/img1.jpg'),
      require('../../../assets/sampleImage/img2.jpg'),
      require('../../../assets/sampleImage/img3.jpg'),
      require('../../../assets/sampleImage/img4.jpg')
    ],
    publisher: '赵六',
    publish_time: '2016-2-2',
    price: '110',
    summary: '中兴 Blade A1(C880A) 16G 灵动白 全网通'
  }
];

const mockData_message = [
  {
    id: '0',
    portrait: require('../../../assets/portrait.jpg'),
    publisher: '赵六',
    publish_time: '2016-2-2',
    message: '哪儿买的?有发票吗'
  },
  {
    id: '1',
    portrait: require('../../../assets/portrait.jpg'),
    publisher: '赵四',
    publish_time: '2016-2-2',
    message: '这么便宜,我要不是有同款的,我就买了'
  },
  {
    id: '2',
    portrait: require('../../../assets/portrait.jpg'),
    publisher: '王五',
    publish_time: '2016-2-2',
    message: '有点灰,但是键盘是好的'
  },
  {
    id: '3',
    portrait: require('../../../assets/portrait.jpg'),
    publisher: '张三',
    publish_time: '2016-2-2',
    message: '有无丑轴,连击,暗病啥的'
  },
];

const mockData_zan = [
  require('../../../assets/portrait.jpg'),
  require('../../../assets/portrait.jpg'),
  require('../../../assets/portrait.jpg'),
  require('../../../assets/portrait.jpg'),
  require('../../../assets/portrait.jpg'),
];

const myPortrait = require('../../../assets/portrait1.png');
import React from 'react-native';
const moment = require('moment');
const { Component, View, Text, StyleSheet, Image, ScrollView, Dimensions, TextInput } = React;
import KeyboardSpacer from './KeyboardSpacer';
import Footer from './Footer';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  footer: {
    height: 50,
    flexDirection: 'row'
  },
  portrait: {
    margin: 5,
    height: 40,
    width: 40
  },
  pic: {
    height: 300,
    width: width - 20,
    resizeMode: 'cover',
    marginVertical: 3
  },
  font: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    fontSize: 12
  },
  priceContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#f3f2f3',
    paddingLeft: 15,
  },
  price: {
    fontSize: 16,
    color: "red",
  },
  contentText: {
    color: '#666',
    lineHeight: 20
  }
});
export default class CommodityDetail extends Component {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    this.hasZan = false;
    // 初始状态
    this.state = {
      detail: null,
      zan: mockData_zan,
      message: mockData_message
    };
  }

  componentDidMount() {
    let ind = parseInt(this.props.data, 10);
    if(ind) {
      ind -= 1;
      this.setState({
        detail: mockData_commoditySummary[ind]
      });
    }
  }

  // 渲染
  render() {
    const data = this.state.detail;
    if(data) {
      const imgs = data.thumbs.map((item, index) => {
        return (<Image key={index} style={[styles.pic]} resizeMode="contain" source={item}/>);
      });
      return (
        <View style={{flex: 1}}>
          <View style={styles.container}>
            <ScrollView>
              <View style={styles.footer}>
                <Image style={styles.portrait} source={data.portrait} />
                <View style={{width: 100, justifyContent: 'center'}}>
                  <Text style={styles.font}>{data.publisher}</Text>
                  <Text style={styles.font}>{data.publish_time}</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                  <Text style={[styles.font, styles.price]}>{`￥${data.price}`}</Text>
                </View>
              </View>
              <View style={styles.priceContainer}>
                <Text style={[styles.font, styles.price]}>{`￥${data.price}`}</Text>
              </View>
              <Text style={[styles.font, {marginVertical: 10}]}>
                {data.summary}
              </Text>
              <View style={{width: width - 10, marginBottom: 10}}>
                {imgs}
              </View>
              {this._renderZan()}
              {this._renderMessages()}
            </ScrollView>
          </View>
          <Footer
            style={{height: 40}}
            data={data}
            message={this.state.message.length}
            zan={{count: this.state.zan.length, mine: this.hasZan}}
            handleMessage={this._handleMessage.bind(this)}
            handleZan={this._handleZan.bind(this)}
          />
          <KeyboardSpacer style={{backgroundColor: '#FFF', position: 'absolute'}}>
            <TextInput ref={(ref => this.messageInput = ref)}
               style={{height: 45, fontSize: 16, borderColor: '#f3f2f3', borderWidth: 1}}
               multiline={true}
               returnKeyType="send"
               blurOnSubmit={true}
               placeholder={'输入文字信息'}
               onSubmitEditing={this.handleSubmitMessage.bind(this)}
            />
          </KeyboardSpacer>
        </View>
      );
    } else {
      return (
        <Text style={styles.contentText}>无信息</Text>
      );
    }
  }

  _renderZan() {
    const zans = this.state.zan.map((item, index) => {
      return (
        <Image key={index} style={{width: 30, height: 30, marginHorizontal: 3}} source={item} />
      );
    });
    if(this.state.zan.length > 0) {
      return (
        <View>
          <View style={{height: 8, backgroundColor: '#f3f2f3'}} />
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, flexDirection: 'row', paddingVertical: 3}}>
              {zans}
            </View>
            <View style={{width: 60, alignItems: 'flex-end'}}>
              <Text style={{fontSize: 12, color: '#3FB0CA'}}>{`共${this.state.zan.length}个赞`}</Text>
            </View>
          </View>
        </View>
      );
    }
  }

  _renderMessages() {
    const messages = this.state.message.map((item, index) => {
      return (
        <View key={index} style={{flexDirection: 'row', paddingVertical: 10, borderTopWidth: 1, borderColor: '#f3f2f3'}}>
          <View style={{width: 35}}>
            <Image style={{width: 30, height: 30}} source={item.portrait} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.font}>{item.publisher}</Text>
            <Text style={styles.font}>{item.message}</Text>
          </View>
          <View style={{width: 100, alignItems: 'flex-end'}}>
            <Text style={styles.font}>{item.publish_time}</Text>
          </View>
        </View>
      );
    });
    if(this.state.message.length > 0) {
      return (
        <View>
          <View style={{height: 8, backgroundColor: '#f3f2f3'}} />
          <View>
            {messages}
          </View>
        </View>
      );
    }
  }

  _handleMessage() {
    this.messageInput.focus();
  }

  _handleZan() {
    let arr = this.state.zan;
    if(this.hasZan) {
      arr.pop();
    } else {
      arr.push(myPortrait);
    }
    this.hasZan = !this.hasZan;
    this.setState({
      zan: arr
    });
  }

  handleSubmitMessage(event) {
    let arr = this.state.message;
    arr.push({
      id: '0',
      portrait: myPortrait,
      publisher: '我',
      publish_time: moment().format('YYYY-MM-DD'),
      message: event.nativeEvent.text
    });
    this.setState({
      message: arr
    });
  }
}