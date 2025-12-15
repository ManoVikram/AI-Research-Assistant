package main

import (
	"log"
	"os"

	pb "github.com/ManoVikram/AI-Research-Assistant/backend/api/proto"
	"github.com/ManoVikram/AI-Research-Assistant/backend/api/routes"
	"github.com/ManoVikram/AI-Research-Assistant/backend/api/services"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {
	// Step 1 - Connect to the Python gRPC server
	godotenv.Load()
	grpcAddress := os.Getenv("GRPC_SERVER_ADDRESS")
	if grpcAddress == "" {
		grpcAddress = "localhost:50051"
	}
	connection, err := grpc.NewClient(grpcAddress, grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatal("Failed to connect to gRPC server: ", err.Error())
		return
	}

	// Step 2 - Create a gRPC client
	client := pb.NewResearchServiceClient(connection)

	// Step 3 - Initialize services with the gRPC client
	services := &services.Services{
		AIClient: client,
	}

	// Step 4 - Initialize and setup the Gin server
	server := gin.Default()

	server.RedirectTrailingSlash = true

	// Step 5 - Register the routes to the Gin server and ingest services for dependency injection
	routes.RegisterRoutes(server, services)

	// Step 6 - Start the Gin server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Fatal(server.Run(":" + port))
}
