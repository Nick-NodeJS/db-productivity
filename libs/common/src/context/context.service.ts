import { Request } from 'express';
import { RequestContext } from 'nestjs-request-context';

import { Injectable } from '@nestjs/common';

// import { HEADER_REQUEST_ID, HEADER_SESSION_ID, HEADER_TRACE_ID } from '@app/common/constant';

@Injectable()
export class ContextService {
  getRequestHeaders() {
    const request: Request = RequestContext.currentContext?.req;
    if (!request) {
      return {};
    }

    // const traceId = request[HEADER_TRACE_ID];
    // const reqId = request[HEADER_REQUEST_ID];
    // const sessionId = request[HEADER_SESSION_ID];
    const url = request.originalUrl;

    return { /*traceId, reqId, sessionId, */ url };
  }
}
