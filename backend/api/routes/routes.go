package routes

import (
	"github.com/ManoVikram/AI-Research-Assistant/backend/api/handlers"
	"github.com/ManoVikram/AI-Research-Assistant/backend/api/services"
	"github.com/gin-gonic/gin"
)

func RegisterRoutes(server *gin.Engine, services *services.Services) {
	// POST request to ask questions to the AI research assistant
	server.POST("/api/ask", handlers.ResearchHandler(services))
}
