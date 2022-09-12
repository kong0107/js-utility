import * as kongUtil from "./mod/all.mjs";
kongUtil.wait(500, "test")
.then(kongUtil.logger("ES module mode works."));
