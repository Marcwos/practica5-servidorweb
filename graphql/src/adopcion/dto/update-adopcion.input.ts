import { CreateAdopcionInput } from './create-adopcion.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAdopcionInput extends PartialType(CreateAdopcionInput) {}
