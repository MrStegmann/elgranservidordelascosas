import mongoose, { Schema, Document } from "mongoose";

interface IIndex extends Document {
  name: string;
  to: string;
}

const indexSchema = new Schema<IIndex>({
  name: { type: String, required: true },
  to: { type: String, required: true },
});

interface IContent extends Document {
  code: string; // Referencia para to de IIndex
  title: string;
  content: string; // Contenido de texto con Markdown
}
const contentSchema = new Schema<IContent>({
  code: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
});

// Un fragmento representa una sección del codex
interface IFragment extends Document {
  name: string;
  index: IIndex[];
  contents: IContent[];
}

const fragmentSchema = new Schema<IFragment>({
  name: { type: String, required: true },
  index: { type: [indexSchema], default: [] },
  contents: { type: [contentSchema], default: [] },
});

const Fragment = mongoose.model<IFragment>("Fragments", fragmentSchema);

export { Fragment, fragmentSchema, IFragment };
