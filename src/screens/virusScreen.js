import React, { useState, useEffect } from "react";

import { StyleSheet,ScrollView, Linking,View,Image } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';
import { VictoryPie,VictoryChart,VictoryTheme,VictoryAxis,VictoryBar } from "victory-native";

import Panel from "./Panel";



const DetailScreen = ({ route }) => {
  
 

  return (
    <View style={style.allback}>
     
    <ScrollView >
    
    

    <Panel
      title="暑期宣導"
      expanded="false"
      content="(一)出國前，請至疾管署網站(https://www.cdc.gov.tw)「國際旅遊與健康＞旅遊醫學＞國際旅遊處方箋」項下，查詢最新國際疫情、了解前往國家或地區之傳染病相關風險及衛教資訊，或於出國前2-4週至「旅遊醫學門診」諮詢，並依建議接種疫苗等預防措施。如有任何傳染病相關疑義，均可撥打免付費防疫專線1922洽詢。
      (二)旅遊傳染病預防措施：
      １、穿著淺色長袖衣褲，或於皮膚裸露處塗抹防蚊藥品。
      ２、用肥皂勤洗手、吃熟食、多喝水。
      ３、有呼吸道症狀應配戴口罩。
      ４、不接觸禽鳥、犬貓及野生動物。
      ５、旅途中或返國時，曾有發燒、腹瀉、出疹或呼吸道不適等疑似傳染病症狀，請於入境時主動告知機場檢疫人員；返國後21天內，若有身體不適，應儘速就醫，並告知醫師旅遊史及接觸史。
      三、各校如於活動期間或結束後發現師生出現疑似傳染病症狀，請主動通報轄區衛生所及校安系統，俾利及時介入防疫，防杜傳染病流行疫情。
      
      "
    />
     <Panel
      title="中國武漢肺炎"
      expanded="false"
      content="衛生福利部中華民國 109 年 1 月 15 日衛授疾字第 1090100030 號公告，新增「嚴重特殊傳染性肺炎」為第五類法定傳染病。

      2019年12月以來，湖北省武漢市展開呼吸道疾病及相關疾病監測，發現不明原因病毒性肺炎病例。個案臨床表現主要為發熱，少數病人呼吸困難，胸部X光片呈雙肺浸潤性病灶。
      
      2020年1月9日接獲中國大陸通知，病原體初步判定為新型冠狀病毒，已完成病毒全長基因定序，電子顯微鏡下亦呈典型冠狀病毒型態，該病毒不同於以往發現的人類冠狀病毒。冠狀病毒(CoV)為一群有外套膜之RNA病毒，外表為圓形，在電子顯微鏡下可看到類似皇冠的突起因此得名。除已知會感染人類的七種冠狀病毒以外，其他的動物宿主包括蝙蝠、豬、牛、火雞、貓、狗、雪貂等。並有零星的跨物種傳播報告。"
    />
    <Panel
      title="發燒、拉肚子：是腸胃炎、腺病毒還是流感？"
      expanded="false"
      content=" ● 諾羅或輪狀病毒：以腸胃症狀為主，不會有呼吸道症狀，也可能合併發燒、寒顫、頭痛、倦怠、肌肉痠痛。因為症狀以嘔吐腹瀉為主，照護時要注意補充水份。

      ● 腺病毒：和流感症狀很像，都會發高燒、咳嗽、流鼻水等，較特別的是可能會有結膜炎（紅眼）、腸胃炎的症狀，不過最大的差別還是在於因腺病毒感染感冒的孩子活動力和食慾都不錯。（看更多>>小孩發燒40度非流感！疾管署：腺病毒正流行 患者增加1倍）
    
      ● 流感病毒：主要症狀為發高燒、疲倦、咳嗽喉嚨痛，也可能流鼻水，若是Ｂ型流感也更容易出現腹瀉、肌肉痠痛等症狀。若疑似得到流感，要儘快就醫並依醫生囑咐服用流感特效藥，發病頭兩天吃抗病毒藥物最有效。
    
      ● 新型冠狀病毒（SARS-CoV-2）：症狀以發燒、四肢無力、乾咳為主，也可能會呼吸困難，其他也有部分個案有腸胃症狀（多為腹瀉）或嗅、味覺喪失。較特別的是國外也有醫師發現部分無症狀感染的兒童、青少年四肢末端長水泡，台灣也有確診案例身體上出現水泡。（看更多>>COVID-19 新病徵？醫師提醒：「腳趾水泡」可能是無症狀兒童患者的感染跡象） "
    />
    <Panel
      title="日常預防措施"
      expanded="false"
      content=" 徹底洗手或使用含酒精的洗手液。
       避免用未洗的手觸摸眼睛、鼻子和嘴巴。
       避免與生病的人密切接觸。
       生病時待在家裡，並鼓勵家人也照做。
       咳嗽或噴嚏時用紙巾遮擋，然後將紙巾丟到垃圾桶中，並立即洗手。沒有紙
      巾？咳嗽或噴嚏時用肘部遮擋，而不是用手。
       清潔和消毒經常觸摸的物體和表面。"
    />
    <Panel
      title="更多資訊"
      expanded="false"
      content=" NewYork-Presbyterian 致力於為我們的患者提供最新資訊。請造訪我們的網
      站 nyp.org 瞭解最新新聞。
      如果您對 COVID-19 有任何疑問，請致電 NewYork-Presbyterian 的熱線電話 646-
      697-4000。此熱線作為一項公共服務，僅用於提供資訊，而不能用於診斷、治療
      或提供醫學意見。
      如果您感覺不適，請考慮使用 NewYork-Presbyterian 的遠端緊急護理處理沒有生
      命危脅的症狀，比如發燒、咳嗽、胃部不適或噁心。請造訪 nyp.org/urgentcare 瞭
      解更多資訊。"
    />
  </ScrollView>
  </View>
  );
}
const style = StyleSheet.create({
  allback:{
 flex:1,
backgroundColor:'#DAD7D7'
  },

});

export default DetailScreen;