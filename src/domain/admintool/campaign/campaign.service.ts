import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DynamoDBDataMapper } from '@shared/dynamodb-data-mapper';

import { CampaignSchema } from '@admintool/campaign/campaign.schema';
import { CreateCampaignDto } from '@admintool/campaign/dto/create-campaign.dto';
import { AreaSchema } from '@admintool/area/area.schema';
import { uuidGenerate } from '@util/uuid-generate.util';

@Injectable()
export class CampaignService {
  constructor(private readonly dynamoDB: DynamoDBDataMapper) {
    //
  }

  async createCampaign(dto: CreateCampaignDto): Promise<CampaignSchema> {
    return this.dynamoDB.mapper
      .put(
        Object.assign(new CampaignSchema(), {
          id: uuidGenerate(),
          codCampanha: dto.codCampanha,
          canal: dto.canal,
          nome: dto.nome,
          descricao: dto.descricao,
          emailResponsavel: dto.emailResponsavel,
          textoPrincipal: dto.textoPrincipal,
          textoSecundario: dto.textoSecundario,
          defaultUrlRedirect: dto.defaultUrlRedirect,
          defaultMetaData: dto.defaultMetaData,
          prioridade: dto.prioridade,
          nomeIcone: dto.nomeIcone,
          pathImagemS3: dto.pathImagemS3,
          nomeLambda: dto.nomeLambda,
          lambdaMensagens: dto.lambdaMensagens,
          metodo: dto.metodo,
          tipo: dto.tipo,
          dtVigenciaFim: dto.dtVigenciaFim,
          dtVigenciaIni: dto.dtVigenciaIni,
          ativo: false,
        }),
      )
      .then((area) => {
        return Object.assign(new AreaSchema(), {
          ...area,
        });
      })
      .catch((err) => {
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      });
  }

  async listCampaigns(): Promise<CampaignSchema[]> {
    try {
      const items = [];
      // eslint-disable-next-line no-restricted-syntax
      for await (const record of this.dynamoDB.mapper.scan(CampaignSchema)) {
        items.push(Object.assign(new CampaignSchema(), record));
      }
      return items;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
}
