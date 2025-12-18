# AI Research Assistant

## Install the Necessary Packages

All the necessary Python pacakges are added to the [requirements.txt](/backend/services/requirements.txt) file. Run the below command to install all the packages from this file.

```bash
pip3 install -r requirements.txt
```

The below command installs the necessary Go gRPC packages.

```bash
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
```

Add the installed Go protoc-gen-go package to PATH

```bash
export PATH="$PATH:$(go env GOPATH)/bin"
```

## Generate the gRPC Files

Run the below command from the /backend folder to generate the Python gRPC files.

```bash
python3 -m grpc_tools.protoc -I./proto --python_out=./services/proto --grpc_python_out=./services/proto ./proto/service.proto
```

Run the below command from the /backend folder to generate the Go gRPC files.

```bash
protoc --proto_path=./proto --go_out=./api/proto --go_opt=paths=source_relative --go-grpc_out=./api/proto --go-grpc_opt=paths=source_relative ./proto/service.proto
```

## API Usage

### Request

```bash
curl --location 'http://localhost:8080/api/ask' \
--header 'Content-Type: application/json' \
--data '{
    "query": "Obito Uchiha'\''s transformation"
}'
```

### Response

```bash
{
    "summary": "- **Initial Characterization**: Obito Uchiha starts as a kind-hearted ninja in Team Minato, showcasing hope and ambition before his transformation begins.\n- **Tragic Manipulation**: After being believed dead during the Third Great Ninja War, Obito is saved and manipulated by Madara Uchiha, leading him to adopt a nihilistic worldview.\n- **Jinchuriki Transformation**: Obito's significant transformation occurs when he absorbs the Ten Tails, becoming its Jinchuriki, which grants him immense power during the Fourth Shinobi World War.\n- **Conflict with Naruto**: His interactions with Naruto highlight a philosophical conflict, as Naruto represents the hope and ideals Obito once held, challenging his nihilism.\n- **Redemption Arc**: Despite his dark choices, Obito's journey includes themes of redemption, as he seeks to atone for his past actions and reconnect with his lost ideals.\n- **Cultural Significance**: Obito's character arc reflects the fragility of idealism, the corrupting nature of power, and the potential for redemption, making him a complex figure in the *Naruto* series.\n- **Emotional Depth**: His transformation serves as a commentary on loss, grief, and the human experience, resonating deeply with fans and enriching the narrative of *Naruto*.",
    "resources": null,
    "critique": "### Critique of the Summary\n\n#### Potential Biases\n1. **Positive Framing of Obito**: The summary presents Obito's character arc in a largely sympathetic light, emphasizing themes of hope, redemption, and emotional depth. This could indicate a bias towards viewing his actions as justified or understandable, potentially downplaying the consequences of his choices.\n2. **Lack of Critique on Nihilism**: While the summary acknowledges Obito's nihilistic worldview, it does not critically engage with the implications of this philosophy or the harm it causes to others. This could suggest a bias towards romanticizing his transformation rather than addressing the darker aspects of his character.\n3. **Idealization of Naruto**: The summary positions Naruto as a beacon of hope and ideals without acknowledging any flaws or complexities in his character. This could reflect a bias towards idealism in the narrative, overlooking the nuances of both characters.\n\n#### Missing Critical Information\n1. **Motivations Behind Obito's Actions**: The summary does not delve into the specific motivations that drive Obito's transformation and actions, such as his desire to create a world free of pain, which is central to understanding his character.\n2. **Consequences of Obito's Actions**: There is little mention of the broader impact of Obito's choices on the world and other characters, which is crucial for a complete understanding of his character arc.\n3. **Role of Other Characters**: The summary could benefit from mentioning other key characters who influence Obito's journey, such as Kakashi Hatake, who plays a significant role in Obito's past and redemption.\n4. **Cultural Context**: While the summary touches on cultural significance, it lacks specific examples or references to how Obito's story reflects broader themes in Japanese culture or the genre of shonen manga.\n\n#### Suggested Improvements\n1. **Balanced Perspective**: Include a more balanced view of Obito's character by acknowledging the negative consequences of his actions and the suffering he causes, alongside his motivations and potential for redemption.\n2. **Deeper Analysis of Themes**: Expand on the themes of nihilism and idealism by providing examples from the narrative that illustrate these concepts, as well as their implications for the characters and the story.\n3. **Character Relationships**: Incorporate a discussion of Obito's relationships with other characters, particularly how they shape his journey and contribute to the narrative's complexity.\n4. **Cultural References**: Add specific cultural references or comparisons to other works that highlight the significance of Obito's character arc within the context of *Naruto* and the shonen genre.\n5. **Conclusion**: Conclude with a statement that encapsulates the complexity of Obito's character, acknowledging both his tragic flaws and the potential for growth, which would provide a more nuanced understanding of his role in the series."
}
```