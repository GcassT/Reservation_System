import { AbstractDocument} from "@app/common/database/abstract.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({versionKey: false}) //Para no asignarle una version al documento
export class ReservationsDocument extends AbstractDocument {
    //Esta será la clase modelo que guiará el TDocument que esperamos recibir en nuestros métodos

    //ATRIBUTOS DE LA CLASE
    @Prop()
    fechaCreacion: Date;

    @Prop()
    fechaInicio: Date;

    @Prop()
    fechaFin: Date;

    @Prop()
    userID: string; //Se espera utilizar UUID

    @Prop()
    IDlugar: string;

    @Prop()
    factura: string;

}

export const ReservationSchema = SchemaFactory.createForClass(ReservationsDocument)
