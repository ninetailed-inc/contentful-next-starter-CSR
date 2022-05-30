import type { NinetailedRequestContext, CampaignContext } from '../types';
import { buildQuery } from './build-query';

export const buildCampaign = (ctx: NinetailedRequestContext) => {
  const params = buildQuery(ctx.url);
  const campaign: CampaignContext = {};

  if (params['utm_campaign']) {
    campaign.name = params['utm_campaign'];
  }

  if (params['utm_source']) {
    campaign.source = params['utm_source'];
  }

  if (params['utm_medium']) {
    campaign.medium = params['utm_medium'];
  }

  if (params['utm_term']) {
    campaign.term = params['utm_term'];
  }

  if (params['utm_content']) {
    campaign.content = params['utm_content'];
  }

  return campaign;
};
