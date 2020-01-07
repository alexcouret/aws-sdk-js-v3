import {
  SSMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SSMClient";
import {
  UpdateMaintenanceWindowTaskRequest,
  UpdateMaintenanceWindowTaskResult
} from "../models/index";
import {
  deserializeAws_json1_1UpdateMaintenanceWindowTaskCommand,
  serializeAws_json1_1UpdateMaintenanceWindowTaskCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type UpdateMaintenanceWindowTaskCommandInput = UpdateMaintenanceWindowTaskRequest;
export type UpdateMaintenanceWindowTaskCommandOutput = UpdateMaintenanceWindowTaskResult;

export class UpdateMaintenanceWindowTaskCommand extends $Command<
  UpdateMaintenanceWindowTaskCommandInput,
  UpdateMaintenanceWindowTaskCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateMaintenanceWindowTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateMaintenanceWindowTaskCommandInput,
    UpdateMaintenanceWindowTaskCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateMaintenanceWindowTaskCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateMaintenanceWindowTaskCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<UpdateMaintenanceWindowTaskCommandOutput> {
    return deserializeAws_json1_1UpdateMaintenanceWindowTaskCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
