import { attribute, table } from '@aws/dynamodb-data-mapper-annotations';

@table('campaigns')
export class CampaignSchema {
  @attribute()
  id: string;

  @attribute()
  codCampanha: string;

  @attribute()
  canal: [string];

  @attribute()
  nome: string;

  @attribute()
  descricao: string;

  @attribute()
  emailResponsavel: string;

  @attribute()
  textoPrincipal: string;

  @attribute()
  textoSecundario: string;

  @attribute()
  defaultUrlRedirect: string;

  @attribute()
  defaultMetaData: string;

  @attribute()
  prioridade: string;

  @attribute()
  nomeIcone: string;

  @attribute()
  pathImagemS3: string;

  @attribute()
  nomeLambda: string;

  @attribute()
  lambdaMensagens: string;

  @attribute()
  metodo: string;

  @attribute()
  tipo: string;

  @attribute()
  dtVigenciaFim: Date;

  @attribute()
  dtVigenciaIni: Date;

  @attribute()
  ativo: boolean;
}
