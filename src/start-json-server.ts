import { Server } from "@vikas/json-server-learn";

import { Routes } from "./extend";

const s = new Server();

const r = new Routes();
s.addNewRoutes(r.getRoutes());
s.start();
