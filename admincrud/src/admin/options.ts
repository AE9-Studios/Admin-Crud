import { AdminJSOptions } from 'adminjs';
import { db } from '../db/index.js';
import bcrypt from "bcryptjs";
import { ComponentLoader } from 'adminjs'
import path from 'path';
import { fileURLToPath } from 'url';

const componentLoader = new ComponentLoader()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dashboardPath = path.resolve(__dirname, './dashboard.js');

// Cargar el componente personalizado del dashboard
const Components = {
  // Dashboard: componentLoader.add('Dashboard', dashboardPath),
  Dashboard: componentLoader.add('dashboard', dashboardPath)
  // other custom components
}

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin-crud',
  loginPath: '/admin-crud/login',
  dashboard: {
    component: Components.Dashboard,
  },
  pages: {
    Dashboard: {
      component: Components.Dashboard,
    },
  },
  branding: {
    companyName: 'Classic-Vision',
    logo: false
  },
  resources: [
    {
      resource: db.table('USER'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              if (request.payload.Password) {
                request.payload.Password = await bcrypt.hash(request.payload.Password, 10);
              }
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              if (request.payload.Password) {
                request.payload.Password = await bcrypt.hash(request.payload.Password, 10);
              }

              request.payload.Updated_At = new Date();
              console.log(request.payload);

              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',
      },
    },

    {
      resource: db.table('PERSON'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',

      },
    }, {
      resource: db.table('CLIENT'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              console.log(request.payload);
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',
      },
    }, {
      resource: db.table('SUPPLIER'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',
      },
    }, {
      resource: db.table('EMPLOYEE'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',
      },
    }, {
      resource: db.table('SALARY'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
      },
    }, {
      resource: db.table('SCHEDULE'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',
      },
    }, {
      resource: db.table('SCHEDULE_EMPLOYEE'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',
      },
    }, {
      resource: db.table('PERMISION'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',
      },
    }, {
      resource: db.table('VACATION'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',
      },
    }, {
      resource: db.table('CATEGORY'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',
      },
    }, {
      resource: db.table('PRODUCT'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',
      },
    }, {
      resource: db.table('INVENTORY'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',
      },
    }, {
      resource: db.table('APPOINTMENT'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',
      },
    }, {
      resource: db.table('APPOINTMENT_SOLICITATION'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',
      },
    }, {
      resource: db.table('SERVICE'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',
      },
    }, {
      resource: db.table('PURCHASE_QUOTATION'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',
      },
    }, {
      resource: db.table('PURCHASE_ORDER_DETAILED'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',
      },
    }, {
      resource: db.table('PURCHASE_ORDER'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',
      },
    }, {
      resource: db.table('INVOICE_ORDER_PRODUCT_DETAILS'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',
      },
    }, {
      resource: db.table('INVOICE_ORDER_SERVICE_DETAILS'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',
      },
    }, {
      resource: db.table('INVOICE_ORDER'),
      options: {
        actions: {
          new: {
            before: async (request) => {
              request.payload.Created_At = new Date();
              request.payload.Updated_At = new Date();
              return request;
            },
          },
          edit: {
            before: async (request) => {
              request.payload.Updated_At = new Date();
              return request;
            },
          },
        },
        properties: {
          Id: { isVisible: { edit: false, show: true, list: true, filter: true } },
          Created_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
          Updated_At: { isVisible: { new: false, edit: false, show: true, list: true, filter: true } },
        },
        titleProperty: 'Id',
      },
    },
  ],
};

export default options;