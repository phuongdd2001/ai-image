import { OptionImageData } from "./data/list-of-option-image"
import { ListOfOptionImageAiService } from "./http/list-of-option-image-ai.service"

const DATA_SERVICES = [
    { provide: OptionImageData , useClass: ListOfOptionImageAiService },



  ]

  export const CORE_PROVIDERS = [
    ...DATA_SERVICES,
  ]
