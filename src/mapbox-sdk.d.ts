// src/mapbox-sdk.d.ts
declare module '@mapbox/mapbox-sdk' {
    import { MapiRequest } from '@mapbox/mapbox-sdk/lib/classes/mapi-request';
  
    interface MapboxClientOptions {
      accessToken: string;
    }
  
    interface GeocodeRequest {
      query: string;
      limit?: number;
    }
  
    interface GeocodeResponse {
      body: {
        features: Array<{
          place_name: string;
          center: [number, number];
        }>;
      };
    }
  
    export interface GeocodingService {
      forwardGeocode(request: GeocodeRequest): MapiRequest;
    }
  
    export default function createClient(
      options: MapboxClientOptions
    ): {
      geocoding: GeocodingService;
    };
  }
  