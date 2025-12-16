package models

type ResearchResponse struct {
	Summary   string   `json:"summary"`
	Resources []string `json:"resources"`
	Critique  string   `json:"critique"`
}
