import grpc
from concurrent.futures import ThreadPoolExecutor
from backend.services.pipeline.research_flow import ResearchPipeline
from proto import service_pb2, service_pb2_grpc

class ResearchService(service_pb2_grpc.ResearchServiceServicer):
    def __init__(self):
        super().__init__()

    def Research(self, request, context):
        query = request.query

        result = ResearchPipeline.execute(query=query)

        return service_pb2.ResearchResponse(
            summary=result["summary"],
            critique=result["critique"],
            resources=result["resources"]
        )

def serve():
    # Initialize the gRPC server
    server = grpc.server(ThreadPoolExecutor(max_workers=10))

    # Add the gRPC service to the server
    service_pb2_grpc.add_ResearchServiceServicer_to_server(servicer=ResearchService(), server=server)

    # Lisen on port 50051
    server.add_insecure_port('[::]:50051')

    # Start the server
    server.start()
    print("gRPC server is running on port 50051...")

    # Keep the server running
    server.wait_for_termination()

if __name__ == "__main__":
    serve()