package evenbeen.JobFindingApp.config;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class StandedResponce {
    private int code;
    private String massage;
    private Object data;
}
