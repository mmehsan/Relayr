package Data.Model;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Fact {

    private String _id;
    private int __v;
    private String user;
    private String text;
    private LocalDateTime updatedAt;
    private LocalDateTime createdAt;
    private Boolean deleted;
    private String source;
    private Boolean used;
    private String type;
}
