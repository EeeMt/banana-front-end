import {ArticleListItem} from './articleListItem';

export const ARTICLE_LIST_ITEMS: ArticleListItem[] = [
  {
    id: 11,
    title: '旅行的意义',
    updateTime: '2019-01-24',
    category: 'Life',
    intro: '你看過了許多美景\n' +
      '你看過了許多美女\n' +
      '你迷失在地圖上每一道短暫的光陰\n' +
      '你品嚐了夜的巴黎\n' +
      '你踏過下雪的北京\n' +
      '你熟記書本裡每一句你最愛的真理'
  },
  {
    id: 12,
    title: '猫的墓',
    updateTime: '2019-01-25',
    category: 'Life',
    intro: '移居到早稻田以来，猫渐渐地瘦了，同孩子们嬉戏的气色全然没有。' +
      '太阳照射着屋宇，便去睡在廊下。在摆好了的前足上，载着方形的颚，' +
      '凝然地眺望着庭里的树，许久许久没有见着它动，孩子虽是在旁边怎样的吵闹，' +
      '只装作不知道的脸色。连女仆除了仅仅把三次的食物放在厨房的角落里给它之外，' +
      '大抵总不去理睬它的。那食物多半被邻近的金花猫走来吃完，猫也无发怒的样子，只是悄然地睡着罢了。'
  },
  {
    id: 13,
    title: '咸菜茨菰汤',
    updateTime: '2019-01-25',
    category: 'Life',
    intro: '一到下雪天，我们家就喝咸菜汤，不知是什么道理。' +
      '是因为雪天买不到青菜？那也不见得。除非大雪三日，卖菜的出不了门，' +
      '否则他们总还会上市卖菜的。这大概只是一种习惯。一早起来，看见飘雪花了，我这就知道：今天中午是咸菜汤！'
  },
  {
    id: 13,
    title: 'Hello vert.x',
    updateTime: '2019-01-28',
    category: 'Coding',
    intro: '`Eclipse Vert.x`是一个事件驱动的应用程序框架，其支持多种编程语言，' +
      '并运行于`Java`虚拟机中。 在其他编程语言中，与其类似的有`Node.js`、`Twisted`、`Perl Object Environment`、`libevent`、`reactPHP`、`amphp`及`EventMachine`。'
  },
  {
    id: 14,
    title: 'Http请求连接池',
    updateTime: '2019-01-28',
    category: 'Coding',
    intro: '通常，我们采用如下的样板代码来构建HttpClient:\n  ' +
      '```java\n' +
      'HttpClientBuilder builder = HttpClientBuilder.create();\n' +
      'builder.setMaxConnTotal(maxConnections).setMaxConnPerRoute(maxConnectionsPerRoute);\n' +
      'if (!connectionReuse) {\n' +
      '    builder.setConnectionReuseStrategy(NoConnectionReuseStrategy.INSTANCE);\n' +
      '}\n' +
      'if (!automaticRetry) {\n' +
      '    builder.disableAutomaticRetries();\n' +
      '}\n' +
      'if (!compress) {\n' +
      '    builder.disableContentCompression();\n' +
      '}\n' +
      'HttpClient httpClient = builder.build();\n' +
      '```'
  }

];
