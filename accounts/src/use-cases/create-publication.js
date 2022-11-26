import PublicationEntity from "../entities/publication.entity.js";
import { randomUUID } from 'crypto';
import createPublicationValidator from "../validator/create-publication.validator.js";

export default class CreatePublication {
  constructor(publicationRepository) {
    this.repository = publicationRepository;
  }

  async execute({ title, author, content }) {

    const validator = new createPublicationValidator();
    const publicationValidationLog = await validator.execute({ title, author, content });

    console.log(publicationValidationLog);
    if (publicationValidationLog.temErro) {
      return publicationValidationLog.data;
    } else {

      const publication = new PublicationEntity({
        // generate publication id and add to publication object
        id: randomUUID(),
        title,
        author,
        content,
        creation_date: new Date().toISOString().substring(0, 10)
      });

      await this.repository.save(publication);

      return publication;
    }
  }
}