export class MoviesTop {
    public title: string;
    public releaseDate: Date;
    public description: string;
    public image: string;
   
    constructor(title:string, releaseDate:Date, description:string, image: string) {
      this.title = title;
      this.releaseDate = releaseDate;
      this.description = description;
      this.image = image
    }
     
  }