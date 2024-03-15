import { PageType } from "./page-content";

export class CollaboratorsPageContent {
    type ?: PageType;
    title !: string;
    subtitle_current_students !: string;
    subtitle_old_students !: string;
    description_current_students !: string;
    description_old_students !: string;
    photo_url !: string;
    subtopics_new !: Array<CollaboratorsPageSubtopic>;
    subtopics_old !: Array<CollaboratorsPageSubtopic>;
}

export class CollaboratorsPageSubtopic {
    title !: string;
    description !: string;
    urls !:Array<CollaboratorsPageUrls>;
}

export class CollaboratorsPageUrls{
    urlcontent!: string;
    urldescription !: string;
    urlflag!:boolean;
    urlpersonal!:string;
}
