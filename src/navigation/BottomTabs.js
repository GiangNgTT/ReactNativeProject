import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import History from '../screens/History';

const BottomTab = createBottomTabNavigator();

const iconUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrjmWv58Qw-Cjo05ZBK8XWtOU0IDsrHhATg&usqp=CAU';

const iconHistory =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAAAkFBMVEUAAAD////+/v7t7e3u7u7s7Oz29vb9/f3y8vLz8/P39/f6+vrKyspKSkpPT0+VlZW+vr6Pj4/R0dGCgoLb29uJiYmbm5vi4uJYWFhhYWHm5uaDg4OsrKyhoaG4uLjDw8Nra2swMDB4eHgpKSkUFBQ7OzsgICBdXV2xsbEkJCQ+Pj4ODg41NTVoaGhFRUUTExO37+NEAAAZlUlEQVR4nN1df3ujKhMNggiaNj9qkjZtmjTb3Wb37t77/b/dy4AiICoY0+3z8hcPiSdMVDgchplZIgpimBCcI1EtRI0QqCGo4AI+p9DIoDFLoTGDjzlcQ0UjKmQj+mpAZPb/b1uKa6QU4xpJ1GokUa2QoLFCEl+skKARfTUgy7akRmLdSDikS18DiMwQFJaKkkOtgBqRjRiqBdQo1BjUEqilGVQ51Li+Jv16QDMGpRAlo1DjUC2aRg41CrW8aZS13GkkXw2omIkbiuG/SBDcZ2m2uM/QmEEjg0YKNfFOY/n/wTstGnOo5fAxk41fDQihGVFI4iGlUOXqGZZI8rkXNUwTNV6Jh7gar+AaqOUAr14GfAsgfAVQMoPBsulSygSORsqyhEGVQqNCErWs+pfgY0DCTNSyqkvQyKHKodYDpAd13SWCa9t0j6Cxtk00VrbBSF/ZRnqAkhnG6glA8AQQlqs3mYsiaznUMt1IZY3qjxOoudcUUCv6gVQj0T9uPEqp2SP1TKJMNiby6uqZRHI0xLgbaJZDobIUKF1uF1A2q9VqI2srqK18jaq28X3sbbSBDmta5NT4cbsW2+j9uJoD4DFB68fZZ5aHHZc3Qj7C1Y2AR7jpUa4bqzkAir6juJoDqlGmBYRrzoVZ+vSplkFZZUi9nr2cK204Fx7FuVj549NNm82+HeGVnZBzYQ8vIbv3v2CaKB+poBMwqIupSXUphRrYBs+kqOaVbTBigMHwTCY0lc9kokYZYZviJSaQeCblDM6L+79jmijbPK+IRmFwCs0+VKNBToB9FD7G4l7DZorCvVY/dH9YQ5mLctS1+bypdn987Lqm1XhnG/dtDkO3Jogo1ayxIYiZbEw006SaNVZzgKafBpDkJRh9Uz/zSqu5CoqayuS/IuGbRviDiHwM4F8jXF9D5K/Lf412AqHWcPyUTkZwEpuXiM/X6jeONOXJzTlX2zbxYBaCbkxM3hTn4gv5A6d8iOEQk+GgkVTJZ9vs25I3tkVwrp4eKdvoH4k/F5ep+0bqOSNh8nOJBDWS1I1q4ZhDG5ONuFnwy/+rE8hrm3gwd1QQ0xigoR6pOUCNknnN0RoWUK8EGxaANQtIa16nyJ56v1K11ugDKrpIwlZMYGkE0ECPKl6ibIN7+gkSTqdtYiqn02tBhm3hLCC1WEA4nei2TT6YV/CS1OElPtt6lJc4ecoL1GfbbLYgwUCDOpfxvmXoUyScfttmb/NQoEEtCB7MXDEFAuOkWEJnagCCWqZGJbtRDVU5VNWoJBvlxwVU1fDWCdQxTjblz44GAQ30KJNzN1W2qVVuM1OiaqZM9UyZGjNljjrn7n6gQdvEiCkgs0GggR4ljm2fIeEE2CY55jRaUG3bNcrLlbyk/WCKV4yT67UgrmwTC/ErlJdgCSfMttnsoNCv0IJguVONk7D0kXKUXBipGqyWcqlrUbuxcBvVEsrT6AJlH2G2zX7PUZHn43tkzm8ZUjM6NtUJ/ZDBfQblBZ4N1GYBqU0neoAG5gCznAga3yPf3E18LIB4Z0rcmruxMeV2AEXYBg9m0sFLBnv01ThXu7zNxcorkJe4nMvhJbli3ZXygi3lpXqnSWoqL8gn4fQCxdkmOSYZ0SOxDgAZth5LQJFVr2Zev8NKsJUvaVxjN1DwWKLLlhZjeiTmAMHBqjkAa+UFS+UliVFeeiUc+SamcXOAUX6vxTSe6jlA9wjrHuGmR9jSgjp4iXxGhf3M3aKAP0hdnonGWvbRjTATsMJpjOMlrXLacTJKC9K8xLYNLbdbuUex2EKB2krWmsaBj3Xj4iJ1nfG2iRGTS6UAeMkQ58KDnCtB51Gd8JbHQk8+6M84CLn4qaZQNRq6nMvVgqRUW69xGFMrCqk1FuhhOtueQN6s1jibsSAnhjK5312tcaT6qRY+0KjWOE1je23aKC98Qtse1YsqR+njeJgLD9KCikEtaFrb1JQLi83iChwxHWiga7SgW9gm6cTzFUAvKAvmJX/DNnYNkiTlozlXetP3DSbW1+ELOsvJBFLvm9aCsNaCoFFO2Ob8llT/BbyfE9r2UeBqyoUfpqsroErSAOn5DdBzNb9hY37r1oKmnAMKi07Qw3ioLeuau/u1oM+yDdPybvgif3mkE2hB0/ISS8IRwxVaP3wbBfXG/XtUOEoLEquxXSnKHvj2Hmol8G1c2o27plGuFXZ1I051I2tJOHJBBl/dw+cKSC4b9DXpzmlkv6p+9mlBqVcLyls755xLfVcuhyTNyZQwoxslzVEKkPyY6o8L+5quLfj6miCgTPWThe7l2/NbkPKCr9OCxgNV706O2kCxvORaLWhyoMo28d2vqgWNB7JsG60FoUp5ST3KC/YqL81WrqUFTQqkn8kgIDwDZ7xEXcMr37wvWxJ1D0hgP605wFbf5X+hhu6k5mikGXHVnxqyHzAZUPV87UkYUB8vSWJ2hJw9qpsAaduCeUmnFpTEKC/W3uI4IM8mpQ0UaluIFpR0KS/Y4xeUdu6/hQJVjmGKP/mA0J22LaBHSgsq1DWMD8/1TWN+nQOgcU0G4mzB8G5dSo+9dblnjdObAYTOjx8fTx8pD+tRnxbUvNNdyot36I5158nL5fb8+GYT4vfvfzYvZUudorRSfwN69Df8gjSQuBHZevv0Tw/n/35+3VPKPPs4X9MvSAERRstD0K7Ht4elgrzSLwjF2damgbVt/UDisSm3/4YYVpXTMVOzWESPiLMnnEi5odEg5NiTUK1BVJMxXMT11kj1vqlnUlKlpB8IoWX0PtX7aq/m/+Ae4ZlYQXp4Saq9AgytVqw16z0qzQKgsd6jqkcMDo3dQGi/6HvFusvjPK5Hn81LxH9whQrztlTkbQQvubltOSJXajDfljmLsC3CL6hHeQnwC8KMX6NLVuX7kbIRWtAIL5xGeTHoux+I8ZdpDo/82fEwLUjuiFVzgHTRs/a0WOXrp3fmiG5UJEo3kuaaytfPAUK76c6OHCTmQI+8WhDplHCSbuXF4SUWkKwNKMk/H8+rw+Hlcrm8vmwfTt/7v/1vSav57W9rQSnhux4Z+X5zWVcb/voYSMF2x8O5R5w95LfUgnCnv3Li2EZo58bN98WacM7aQBjoJkovp64rn/a0v0ceLUjMfdo7WA8OqWbd0Fh7BzdzaOPWnzZzaAWUENaxmfj9sEeVO4oHqHYYee0w70cJ5K27R3gmldxKC6KB3j/c9v4ZuCZnfqeLhxJJt8AhoALxyy8vwmvW2yNr/60ZuolHwsFYnxRvKy+w7vZJOCRlpe+t+e+QI6+E4wGCX597ncBWtLtHn8C56NrTp/eD+PUKPQyI5KXv0TzzAc5F4rUgEqgFpdzncLFlXB4RigASH+a+c8xPrLNHFudKK6qE5Fp2Ai0IZdwzQJ73PB5IzZbH9uP9KB8AvxYk94JqLajLBzi3G52PDVdlx28YLVt9eZurY/1xQJXTcpa3fYoesy6gXi2IqFO59X8hWSPc/frIOcHViSzJS+rFFdZaEGs/kM+E9Uo4oNS1gZoe0Xnr1j2yLt/Q1txtcC7NJyV7g4gQWUMdFXuDMBA1n0SJfeSct4eRY16dTvRJOEnBKGccQnp0nl3HpGitkk50hF9Q3FrrX2RpQZiV7jfuCfMTnErCQRfxcvzzwFDWJyq1vVMeqP/sumEb/PG5aVvcCvkeWVoQSX86X9godKYGh5aEg9Cp+uIaGUBmj+TZ9QSV7lrpIAeUlhbUWuOA8KcePxprW3XISa1xuDtivyB1MEotfOTiQC1N5FAtetEsXFPkHoxKzGsQczWyOTKA6hNW8ux6219ZuRlH2sZNf+XCXWK/0g7H52pJSXbNd8+8/+w6oa5OtiMdZ9c7/JVjbaPGsWzujv5H7iE4Ji9hL82XfzDZ2H2+O3edZ/9ljaZwA78gwzbMds6Ha+3P1UXeLC1lnw0KZif7BzY0zi8o1rYm8BB39IP5sKjEzWl5l/WJSkSKgQ57PrIoLSj+vmVquee6oh0DRCXXNtQpKtVA9v/33taCnPlN7vGpY+3x42R1aD5He/uTg7iTzUF7iS5vBFFSt3x0ErQwruAKCD42eyTHSQ1E7H2th0IB6UejTwsaM78pOmEP/w80ZLPLsa1LVGqAUp7aHYCYCTfiJXf13J3ZY+Q90P5h4cW1LWSza2790G8WrgWxl4eHDZTnB1Gem6rb+CAbD5VtJLdpAw8TlXy2Jf22JWhr/dKBD/gFGSfFmXnqpokwVqtsvlM3MNnas/Y89Mi5bZt9nKnz7Lr99O9JK47h+L18d9seGrH1cw9FIFBuzW9FmFMAt0etDTKv8WtB1dytowYqLag//KCWcCzB7ps6eBcA1JoDElNU6uhRyl/MX5vhHi3o+rPryL5tRxYK5NiWJGFn16n1VD7c8ux6Yp8kOtF6pB8E8tkWsmtmTwSssHkJ4aYWhOoznJoFVOt0bNIJok+Ka7VBNXLrp3ZKVAoB8vESQO/vEcHIGrpWSdMj6WOodWU6GBtwqDGzRuVtFg5kLYrS3PdNPxC3ds+Nb07tF0TMsHrvUUDu/ObTgnxA3CKvL0bMuNbc7ey/DVGlxNx/S+wNmwOPAOrgXIM9EiOH+X/+CuNcg3Si7ReUW+vh4FA4eCTnUkD2jStRNy9RSEhHDUz0E9BEDUyQGzWQqMMM1lS64DFALi/BnXEMXSB7qHxAdY/Msw9FVpOGzHAA1Pwg8/ED3UigZm/84iggyzbG9TUBPbIozX9ghvxmrxaE+s6uF5rsNWfXqbnze44DYu05IDiOoXXjlmyQl+BuOqElnMTmJcRSSUoUBeTlJSSwR+Zrfqa3iBdkSlWzNxQHNGxbJ1BmSc0/2LC/crRfEOamPLNFcUCRWpANZD2UaxLoF2R4vWHt9ebzwoGhyWQIu0igYC3IB0RP5r9a+XH08ZLUZAGpj044cQzNzY3fPBaoNQe0HZ87gayNvscbxDG0ZoANjwRq61wxcQyt8/CqcVLfGUvHPrJIoPG8BIAssbJMurWgHqqEu21DyNyUIjgSqFcLGgIqrKsvyMu5roljaB63v0PRQB1aUGCPzD3aZ9TWgtrKS0QqCma5W2yKLBKorQVF5bQwpYy7otKC3H2csakoUmYOJZc8iQTq04ICgKi5x08HOFcsL0ktiX1NY4FGakHa1c8cyHYTa0GppTjto4HGaUEayFJ8521ecl0cQ/a7Af9GooH8WlBwjywu+6qeSTf2WIji4/2YUoNx3aNooMz849XKTp1d17WsrvmACnPf41DI86atOYCYykt4BokUUQP8PALImqEuL6JcXkWRtReovVa1ZQlb/y6QueRfyZdyQi3IBF+0nbqjONdAeVtzgm0g+6+lE2tB5sL0EHMgy6MFDZZX7gIh49MnHqYFhWWQELaZq4BLPFCcbbMdsYESZOz6PcqHvz8ORswB0sxkPa9JNBCKO8+yyB0gZEze98WQFgT/ec7MWH/MjfWXEK0FEZNyvbLoVBQ8LtzaowtEjZ39+0Fegl6f3Z1fcw9Y1naalxBzebhk0akoIm37hRwgakyv920tiMT7PJWNbe59i+Vcce/bR8s2674Nca4w22rOxczJ88KCRaXazZj5HNK7y4vcNzWAqLF6fPTZZmWQCLKNVY4tiJh9O7D4VBQ8Jg7se+EAYZMWfSjbWrykUV5CfGf2muxZc/chcrNLjjL5W+fPtMqaOUDW/PaHD2lBYbZpXmJqhCsULyplqAh1RHraGc7BFS8xN2zPfIiXhNsm5+7caD5FHhRXBCfjZD6fy3BVMg/SWtdU47xqzOX6wwZy+OSQFhRpW/Jf03yPxqWiSBlTzzEnMnIpvCVQq+PhVvmUsjaQ5f908HIuU3kJfd9qLcg4a/jzKlEJmWfEQoEuRq+WkhT05bQIHidlWgls7ZnunawTt0iOYQFRc+pfIxnv9Uqf3jJEL0H1dtS0yTEsIMs7ew8+9b17VCGx/hrb7G3nl/yaza4R+U0t5788QAvKEuNcsWL78glgVcRfmf2p3qOyiMmDHDtumxzDAjKHyXtJBwK0ILnngFB9RkyNV4S0tSAL/nvRAgoWlZqpPlwLYubu4nOlTxrrt2tzWiQmr0ivACrCkmOYQJYb2asKtzhlTgt0MvCXbDxQEhsQUdxR87TtLpk8pwUyJcIHY/8tFigJS45hAllhjZXQMGm8IEsx+Rm+/9YCSqIDIlqb+X/64xiOyWkhLjIdq+ZkLFBocowGCFuHPF5qXzVXV3ZOqIdnkAAc84XbFOOBwpJjNNdQYj6SZRGQ0wLFZJCAMD0mp/txBZBmjaE9shxbhv2CIjNISL8gy1VtjkYDRecANX2tnr1+QV4kEhHH0Dqr+AeNB4oLiGgNYrM5G/bFTvQ8E5JBQlIlbj6UM4xGA3UEROwAskj9TxaS06I+6RyWQUKGsbE8sTdInY4eAUSMs9eDPUost/1NzgJyWgRKOKa/cnEyfyYdDxQRENE5JLPXTHPaOIaJHRpiRccCRQVEtEawew00eRxDbulw6WfwEjsZwasGmtw2a9t59gzJNW4d7NFySH03gij25bSAqdHj9daRQaJ6TVLrJMJ+PBBuZvW+HmWWe+FsUTRAfTkt1HOPwzJIVEtK57jdI+TIGgekVgiDPeJ21IYiMKfFAJ1AXpnD2neGZD1jgRKPFtQGIsyKUra4bRxD+8b9sw9K/zU6CLWzs0WT0WfEguIY2mmLnnLfGbHrAiJqIHdja4tQ19n1EX5B+p02JBz7KOELHx8QcUgLIsSKQvOjiMhpER0MWjZm9l7Tjo4FGgxP7SioFzpBTgsPnTAknMJ+UN4wGQk0qAXZTwgcJL99HMOT9ZsfnFynBfnnbpw7u8glsYBuEzs6sQ9mitXiLXiJG49oIc9o3j6nhROuaJv7JJxrkmMIqrL/Yf3G78/KaZHYT+XsBU0GXZXcdNeUT2ThfuVmOS2cIE+XAsjgdMkxUOGEbTywT4pjSNreIgc6IS9Jc+oEhH0S8J+W06J4cYxb0LBUFMNakBiO9o67xre0DXTLnBbuzuSZk2mSY2C+/s/BXntEpYGcFjGJsKpIg5k+DIrcAGGPuBjFPlwaU7SCxi0LH1CvFrQry70oKldZmUJdpUeDxlIlMNONqWrcaQmHpG7IwR8lhJu9MjmGJ/frQVHWmJwWkTF1VHnmesplpfvoyKhIV2hBosr3rUjNG5rGxzEcEw1/09jmiWQ4e9zxK3iJGBrcIUo6XsfntLjGNvVY0LZxs0PhsS0wOQYv2yFfT5z4gXpzWoyybcWtnBYe4/4t4fCQFkBCk2Nkokce99EzJx1A/Tktxti2MHNaJKnnsRR/dckNghiWHAMzfnEDWs5g67kbaPIcoMI2i06wnS909Hkn+hvOS2Dn4NXnXSkIQSfBmT6/qWtbylJv3oBTiVBI7Ggs42IXB6/f6AtN+22bKo5hY5sNRDp8p+4uYqIluF8LkhNW2RHrfU77RKUp4xg2trWA2gO3KqfXlLIeLYgwysuDP1D77C5l/aJSX06LfNQ4ST05LfK1ZxhQ5elQinUjz5PMSI4Bp0o5zRE7Pv/uuvCBGukronNajOIlzfxm0gmWnnqueVxd1pIrceie4lzl8nDuS2yxpENZNnp5CXldLbYHUbYLKE1NNja15uPDYrVkPplDTFDHoWRGv59O581qtdqcT3c/Br57SpnfOThUCyL1nwgcv4r1x1lvrL+cs67wg2jUY+AtP47IKyphPCqnReX8AYeHsM/NuEXffUDrjlEhsqyyoCwbn5HTomnMs8v12X+eyiywRzfPaeFIOENpcobKY1mIASOkR38jj1h2GH/vnkoU3qNb57RoA4nFBrnEpOxrynkvYw6E9ujWOS38QIyvH2LT2/37sucoqkc3zmnRCUQLujyFG/Z9UYKPcp5H9egG+U3Dwg9ilqfLTSejMsrHtuR8RI8mjmPYmYrCAySGOEg4tdz0ZOF6Px3W4u6w5snDn5Pf1N4RGpl3XbKe8nV7/vhl8qy3u9PmZc7qe6BPdlFK5XGUkB715rRIdZdqeF8qig4JJwIIUobJh6rYgxIqSD2QN8HelF7SANH7f97f3+u860M96s1pAaU5z9SViqI+z5ToQ05dqSgCgGBpgpIuoFzNHTSwR9PGMTRyWtwCqFLh9zgMaJS/8qDM4d9+uRqotq29IeQDsrSgYS+cv51TvtO2QS2o5iW3ym96LRBu2xasBe2v9wsKSUUxHqg60ZqSMCA1B5zkNWvUl0GiIxVF/f9heU1IKorxQMp59ycKA6rmN6Wznx0tiFzBS24CpNZ+EFAggpdUpynnaJocoBG8JBwoqw/+H1AYkLItySvNfqnSpypmKrdh5bsid1xp0yhrcvO1cBq5bswmByorUsaCbZNItD6PcXdYQpGH+5vaEWrHuMbjxECXOibcsxplAg7Bz9TOOfKnIP2C5Z31uyS6OS0g7P+Q2vlVSpkb6lRfZMWKc4F7eMup4GuWeZwWpI6PO0dpvmb5tUdZ8CF4ldMCZvQEJXM3YdwXK7+WdWzNsCwbs8pjD+IB5hk+HlZQtlBkbQG1RWfjwMcTAh2W+6zIaUyWDTUHNBJOIlUkNcXoHQzpz9TKayT1JKdRRiWTA3LCpgcapQU1Ek594tikE3VoxcQNHWyu4LXrRE2V8C2AYshbxbkmpkrJXwPy+CvHZJCo5SlvTosvBTQz3PoCM0j05LT4UkAqjuGNJZy/BVTxEo/yMiKnxdcCSrptu84X+wsA1ZzrlhLO3wL6v7btf5wyHZMHtKwjAAAAAElFTkSuQmCC';

const iconSetting =
  'data:image/png;base64,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';

const BottomTabs = () => {
  return (
    <BottomTab.Navigator sceneContainerStyle={{backgroundColor: 'white'}}>
      <BottomTab.Screen
        name="HomeTab"
        component={Home}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>{'Home'}</Text>
              );
            },
            tabBarIcon: ({focused}) => (
              <Image
                source={{
                  uri: iconUrl,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="History"
        component={History}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>
                  {'History'}
                </Text>
              );
            },
            tabBarIcon: () => (
              <Image
                source={{
                  uri: iconHistory,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="SettingTab"
        component={Setting}
        options={() => {
          return {
            tabBarLabel: ({focused}) => {
              return (
                <Text style={{color: focused ? 'red' : 'black'}}>
                  {'Setting'}
                </Text>
              );
            },
            tabBarIcon: () => (
              <Image
                source={{
                  uri: iconSetting,
                }}
                style={styles.icon}
              />
            ),
            headerShown: false,
          };
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  icon: {width: 30, height: 30},
});
