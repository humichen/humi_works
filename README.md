# digitallogiclab網站
>此為數位邏輯設計實驗課程的網站
>建立者：陳鈺文、沈桓民

### 更新課程內容
只需更改 ```course.json```裡的資料就好
#### ＊資料架構：
````
[
    {
        "_id": 0,
        "title": "",
        "entitle": "",
        "img": "",
        "colorclass":"",
        "details": [{
            "courseclass":"",
            "fulltitle":"",
            "logicdiagram": "",
            "filmurl": "",
            "ic": "",
            "purpose": "",
            "results": ""
        },{
            "courseclass":"",
            ...
            ...
        }]
    },{
        "_id": 1,
        ...
        ...
    },
    ...
    ...
]
````

#### ＊資料格式
| 項目 | 型別 | 說明 |
| ------ | ------ | ------ |
| _id | Number | 從0開始編號 |
| title | String | 中文課程類別名稱 |
| entitle | String  | 英文課程類別名稱 |
| img | String | 課程類別圖片路徑，例："images/xxx.png" |
| colorclass | String | 課程卡片底色css的class名稱 （邏輯電路："color_tea"、Arduino："color_bud"） |
| details | Array | 實驗詳細內容列表 |
| courseclass | String | 實驗內容區塊底色css的class名稱 （單項實驗："dark"、多項實驗中的奇數項目："light"、多項實驗中的偶數項目："dark"） |
| fulltitle | String | 中文＋英文實驗名稱，中間以半形空格隔開 |
| logicdiagram | String  | 邏輯圖圖片路徑，例："images/xxx.png" |
| filmurl | String | 範例影片網址 |
| ic | String | 實驗使用元件（含使用數量） |
| purpose | String | 實驗目的 |
| results | String | 實驗成果 |
