import { Controller } from '@nestjs/common';
import { SuperbaseService } from './superbase.service';

@Controller('superbase')
export class SuperbaseController {
    constructor(private superbaseService: SuperbaseService) {

    }

    // async function SuperbaseController(params:type) {
        
    // }
}
