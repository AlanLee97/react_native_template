import React from "react";
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {Button, WhiteSpace} from '@ant-design/react-native';
import {PATH_DEMO_PAGE} from '../../router/RouterConst';
import ALImage from '../../components/al-image/ALImage';

class HomePage extends React.Component{

  //构造器
  constructor(props) {
    super(props);

    this.state = {

    };
  }


  // 渲染函数
  render() {
    return (
        <View style={[localStyle.flexCenter, localStyle.page]}>
          <ALImage style={localStyle.logo} src={require("../../assets/image/rem.jpg")} />
          <View style={{height: 100}}></View>
          <WhiteSpace />
          <Text style={localStyle.title}>React Native Template</Text>
          <View style={{height: 40}}></View>
          <Button onPress={() => {this.props.navigation.push(PATH_DEMO_PAGE)}}>查看示例</Button>
        </View>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {

  }

  //组件将要卸载时
  componentWillUnmount() {

  }

}

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

// 样式
const localStyle = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    width: screenWidth,
    height: screenHeight
  },
  title: {
    color: "#507dfc",
    fontSize: 25
  },
  flexCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 200
  }
})


export default HomePage;


