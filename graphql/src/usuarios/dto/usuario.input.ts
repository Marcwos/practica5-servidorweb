import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UsuarioInput {
    @Field({ nullable: true})
    nombre?: string;

    @Field(() => String, { nullable: true })
    email?: string;

    @Field(() => String, { nullable: true })
    contrasenia?: string;

    @Field(() => String, { nullable: true })
    telefono?: string;

    @Field(() => String, { nullable: true })
    direccion?: string;

    @Field(() => Date, { nullable: true })
    fecha_registro?: Date;
}