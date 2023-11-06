class Articles {
  articles: Array<Article>;
  constructor() {
    this.articles = [
      new Article(
        1,
        "初ブログ",
        [
          new Content("タイトル1", "本文1"),
          new Content("タイトル2", "本文2"),
          new Content("タイトル3", "本文3"),
        ],
        "2023/11/04"
      ),
      new Article(
        2,
        "GraphQL入門を読んで",
        [
          new Content("タイトル1", "本文1"),
          new Content("タイトル2", "本文2"),
          new Content("タイトル3", "本文3"),
        ],
        "2023/11/04"
      ),
      new Article(
        3,
        "現場で役に立つシステム設計入門を読んで",
        [
          new Content("タイトル1", "本文1"),
          new Content("タイトル2", "本文2"),
          new Content("タイトル3", "本文3"),
        ],
        "2023/11/04"
      ),
    ];
  }

  getArticleDigests() {
    return this.articles.map((article: Article) => {
      return {
        id: article.id,
        title: article.title,
        createdAt: article.createdAt,
      };
    });
  }

  getTargetArticle(id: number) {
    const targetArticle = this.articles.filter((article: Article) => {
      return article.id === id;
    });

    if (targetArticle.length > 0) {
      return targetArticle[0];
    }

    return null;
  }
}

export class Article {
  id: number;
  title: string;
  contents: Array<Content>;
  createdAt: string;
  constructor(
    id: number,
    title: string,
    contents: Array<Content>,
    createdAt: string
  ) {
    this.id = id;
    this.title = title;
    this.contents = contents;
    this.createdAt = createdAt;
  }
}

class Content {
  title: string;
  body: string;

  constructor(title: string, body: string) {
    this.title = title;
    this.body = body;
  }
}

export const articles = new Articles();
