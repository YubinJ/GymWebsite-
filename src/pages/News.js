import { Box, Container, Flex, Spacer, Text, Image } from "@chakra-ui/react";
import NewsCard from "../components/NewsCard";
import data from "../data/news.json";

export default function News() {
  return (
    <>
      {/* <Container m="5" p="2" border="2px solid #2596be" bg="gray.200">
        <Flex>
          <Box bg="rgb(90 237 137)" borderRadius="5px" p="1">
            2023年9月18日
          </Box>
          <Spacer></Spacer>
          <Text fontSize="xl" as="b">
            ショウ選手はXXX大会勝利
          </Text>
        </Flex>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9znRcmollXF9QZ1XeOJiZYA3BoPkEB6-uZw&usqp=CAU"></Image>
        <Text>
          ショウ選手は、60キロのキックボクシングの試合で見事勝利しました。試合は非常に激しいもので、ショウ選手は彼の卓越したテクニックと戦術を駆使して対戦相手に立ち向かいました。
          初回から最後のラウンドまで、ショウ選手は高いキック、パンチ、そして膝蹴りを組み合わせた攻撃を繰り出しました。彼のダイナミックな動きと戦術的な判断力が、対戦相手に対する優位性を築きました。
          試合の結果、ショウ選手は対戦相手を圧倒し、判定においても一致した勝利を収めました。彼の勝利は、彼のトレーニングと努力の賜物であり、キックボクシング界における彼の名声を一層高めるものとなりました。
          ショウ選手のファンやサポーターは、彼の卓越した実力と専念に感銘を受け、今後の彼のキャリアに期待しています。この試合の勝利は、彼のキックボクシングのキャリアにおいて輝かしい一歩となりました。
          おめでとう、ショウ選手！
        </Text>
      </Container>
      <Container m="5" p="2" border="2px solid #2596be" bg="gray.200">
        <Flex>
          <Box bg="rgb(90 237 137)" borderRadius="5px" p="1">
            2023年9月15日
          </Box>
          <Spacer></Spacer>
          <Text fontSize="xl" as="b">
            9/17(日)、9/18(月・祝)のクラス予定
          </Text>
        </Flex>
        <Text>
          9/17(日)、9/18(月・祝)はショウ選手が出場し前日計量もあるためクラススケジュールが以下のように変更になります。
          <Spacer height="1rem" />
          9/17(日)<p></p> １号館 通常開館 ２号館 終日休館
          <Spacer height="1rem" />
          9/18(月・祝) <p></p>１号館
          <p></p>8:30～10:00 柔術(先生B)
          <p></p>16:00～16:45 キック初心者(先生A)
          <p></p>17:00～18:15 キッズ柔術(先生B)
          <p></p>※夜の柔術クラスは休講
          <Spacer height="1rem" />
          <p></p>２号館 9:30～11:00柔術自主練 <p></p>※通常のクラスは休講
          <Spacer height="1rem" />
          ジム生の皆様、お気をつけください。
        </Text>
      </Container> */}

      {data.news.map((newsItem) => {
        console.log(newsItem);

        return (
          <NewsCard
            Title={newsItem.Title}
            Time={newsItem.Time}
            PICURL={newsItem.PICURL}
            Content={newsItem.Content}
            key={newsItem.id}
          />
        );
      })}
    </>
  );
}
