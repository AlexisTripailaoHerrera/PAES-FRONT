export interface PreguntasModel {
  id: number;
  texto: string;
  opciones: string[];
  respuestaSeleccionada?: string;
}
