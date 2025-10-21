import { CreatePublicacionInput } from './create-publicacion.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePublicacionInput extends PartialType(CreatePublicacionInput) {}
