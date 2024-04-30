interface Datasets {
  label: string;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  data: number[];
}

export interface GraphData {
  labels: string[];
  datasets: Datasets[];
}

export interface LineGraphModel {
  label: string;
  data: GraphData;
}
