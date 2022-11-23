
export default class PublicationEntity {
  constructor({ id, title, author, content, creation_date }) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.content = content;
    this.creation_date = creation_date;
  }
}