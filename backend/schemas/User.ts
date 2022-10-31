import { list } from '@keystone-6/core';
import {
  text,
  relationship,
  password,
  timestamp,
  select,
} from '@keystone-6/core/fields';


export const User =  list({

    fields: {
      name: text({ validation: { isRequired: true } }),
      company: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
        isFilterable: true,
      }),
      password: password({ validation: { isRequired: true } }),
      vendor: relationship({ ref: 'Vendor.user', many: true, ui: { displayMode: 'cards', cardFields: ['organizationName', 'vendorEmail', 'status'],  } }),
    },
    ui: {
      listView: {
        initialColumns: ['name', 'company', 'email'],
      },
    },
  })
