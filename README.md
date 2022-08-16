## Description

**This project is my personal blog server,mainly use `express.js`, `MongoDB`, heavily used `javascript`.**

## How to start

```
npm i
```

**and then**

```
npm start
```

## API DOC

### bingWallpaper

-   **`GET`**

-   **`link`** [**yourHost**]/api/links/bingWallpaper

-   **`params`**

    | 参数 | 类型 |
    | ---- | ---- |
    | 无   | 无   |

### getArticleList

-   **`GET`**

-   **`link`** [**yourHost**]/api/article/getArticleList?pageSize=`pageSize`&pageNum=`pageNum`

-   **`params`**

    | 参数     | 类型 |
    | -------- | ---- |
    | pageSize | int  |
    | pageNum  | int  |

### getArticleContent

-   **`GET`**

-   **`link`** [**yourHost**]/api/article/getArticleContent?id=`your article id`

-   **`params`**

    | 参数 | 类型   |
    | ---- | ------ | --- |
    | id   | string |     |

### getFootPrintList

-   **`GET`**

-   **`link`** [**yourHost**]/api/footPrint/getFootPrintList

-   **`params`**

    | 参数 | 类型 |
    | ---- | ---- |
    | 无   | 无   |

### getUnsplashImg

-   **`GET`**

-   **`link`** [**yourHost**]/api/links/unsplash?pageSize=`pageSize`&pageNum=`pageNum`

-   **`params`**

    | 参数     | 类型 |
    | -------- | ---- |
    | pageSize | int  |
    | pageNum  | int  |

### getStatic

-   **`GET`**

-   **`link`** [**yourHost**]`your file path/your file name`

-   **`params`**

    | 参数 | 类型 |
    | ---- | ---- |
    | 无   | 无   |
