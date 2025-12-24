# State Management & API Integration

## Redux Store Configuration

### Store Setup

Uses Redux Toolkit's `configureStore` with:

- RTK Query API reducer
- Middleware for API caching and requests
- Store listeners for background polling

### Store Structure

```typescript
{
  segmentationApi: {
    // API state, cache, and requests
  }
}
```

## API Layer (RTK Query)

### Base Configuration

- **Base URL**: `/api` (proxied to backend in development)
- **Timeout**: 30 seconds
- **Retry Logic**: 2-3 attempts with exponential backoff
- **Cache Tags**: `['Health']` for health check invalidation

### Endpoints

#### uploadImage (Mutation)

Uploads ultrasound image for AI segmentation.

**Request**:

- Method: POST
- URL: `/api/upload`
- Body: FormData with image file
- Max Retries: 2

**Response**:

```typescript
{
  success: boolean
  original: string              // Base64 encoded
  segmentation: string          // Base64 encoded
  inference_time: number        // milliseconds
  is_valid_ultrasound: boolean
  confidence_score: number      // 0-1
  quality_metrics: {
    mask_area_ratio: number
    mask_circularity: number
    edge_sharpness: number
    is_valid_shape: boolean
  }
  warnings: string[]
  error?: string
}
```

#### healthCheck (Query)

Checks backend API and model status.

**Request**:

- Method: GET
- URL: `/api/health`
- Max Retries: 3

**Response**:

```typescript
{
  status: string;
  model_loaded: boolean;
}
```

## Type Definitions

### UploadResponse

Complete type definition for segmentation results including validation metrics, quality analysis, and warnings.

### QualityMetrics

Segmentation quality indicators:

- **mask_area_ratio**: Proportion of image covered by mask
- **mask_circularity**: Shape circularity score (0-1)
- **edge_sharpness**: Clarity of mask boundaries
- **is_valid_shape**: Boolean validation of shape reasonableness

### HealthCheckResponse

Backend health status with model loading confirmation.

## Usage Patterns

### In Components

```typescript
// Upload mutation
const [uploadImage, { data, isLoading, error }] = useUploadImageMutation();

// Health check query
const { data, isLoading, error } = useHealthCheckQuery();
```

### Error Handling

Errors include:

- Network/timeout errors (status: 'FETCH_ERROR', 408)
- File too large (status: 413)
- Invalid input (status: 400)
- Server errors (status: 500)

### Caching Strategy

- Automatic caching of successful responses
- Cache invalidation via tags
- Background refetching capabilities
- Optimistic updates support
