
export enum PageType {
    ARTICLE = "ARTICLE", COLLABORATORS = "COLLABORATORS"
}

export class PageContent {
    type ?: PageType;
    title !: string;
    description !: string;
    photo_url !: string;
    subtopics !: Array<PageSubtopic>;
}

export class PageSubtopic {
    title !: string;
    description !: string;
    urls !:Array<PageUrls>;
}

export class PageUrls{
    urlcontent!: string;
    urldescription !: string;
    urlflag!:boolean;
}
