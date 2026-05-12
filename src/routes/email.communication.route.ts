import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

export interface EmailRouteRequestDto {
  email: string;
  subject: string;
  content: string;
  filePath?: string;      // default ""
  source?: string;        // default ""
  applicationid?: string; // @JsonProperty("applicationid") — must be lowercase
  cc?: string;            // default ""
  base64String?: string;
  fileType?: string;
  filename?: string;      // @JsonProperty("filename") — must be lowercase
}

export interface EmailRouteResponseDto {
  status: boolean;
  message: string;
  personalizations: string | null;
}

@Injectable()
export class EmailCommunicationRoute {
  private readonly logger = new Logger(EmailCommunicationRoute.name);
  private readonly emailOtpUrl: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.emailOtpUrl = this.configService.get<string>('app.routes.email.otpUrl')!;
  }

  async initiateRoute(dto: EmailRouteRequestDto): Promise<EmailRouteResponseDto> {
    try {
      // Build payload with all required fields exactly as Spring sends them
      const payload = {
        email: dto.email,
        subject: dto.subject,
        content: dto.content,
        filePath: dto.filePath ?? '',
        source: dto.source ?? '',
        applicationid: dto.applicationid ?? '',   // lowercase — matches @JsonProperty
        cc: dto.cc ?? '',
        base64String: dto.base64String ?? null,
        fileType: dto.fileType ?? null,
        filename: dto.filename ?? null,            // lowercase — matches @JsonProperty
      };

      this.logger.log(`Initiating email route for: ${dto.email}`);

      const response = await firstValueFrom(
        this.httpService.post<EmailRouteResponseDto>(this.emailOtpUrl, payload, {
          headers: { 'Content-Type': 'application/json' },
        }),
      );

      return response.data;
    } catch (error) {
      this.logger.error(`Email route failed: ${(error as Error).message}`);
      throw new Error(`Email communication route error: ${(error as Error).message}`);
    }
  }
}