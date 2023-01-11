import { useMeta } from 'quasar';
import { MetaOptions } from 'quasar/dist/types/meta';

const defaultHead = {
  title: 'Cool site',
  meta: {
    description: { name: 'description', content: 'Amazing site from cool author!' },
  }
};

export function usePageMeta(options?: MetaOptions) {
  options = options || {};

  if (!options.title) {
    options.title = defaultHead.title;
  }
  if (!options.meta) {
    options.meta = options.meta || {};
  }
  if (typeof options.meta.description === 'undefined') {
    options.meta.description = defaultHead.meta.description;
  }

  useMeta(options);
}
