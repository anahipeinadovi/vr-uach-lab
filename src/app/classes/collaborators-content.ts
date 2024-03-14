export class PageContent {
    title !: string;
    subtitle_current_students !: string;
    subtitle_old_students !: string;
    description_current_students !: string;
    description_old_students !: string;
    photo_url !: string;
    subtopics_new !: Array<PageSubtopic>;
    subtopics_old !: Array<PageSubtopic>;
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
