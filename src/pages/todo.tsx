import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

export default function Home() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<
    { id: number; dis: any; position: string }[]
  >([]);

  const positions = ["todo", "doing", "done"];

  const addTask = () => {
    const task = {
      id: Math.floor(Math.random() * 1000),
      dis: input,
      position: "todo",
    };
    setTasks([task, ...tasks]);
    document.getElementById("outlined-basic").value = "";
  };

  return (
    <Box
      sx={{
        width: "50%",
        height: "100vh",
        mx: "25%",
        mt: 20,
      }}
    >
      <Box component="form" sx={{ pl: "3rem" }}>
        <TextField
          sx={{ width: "70%" }}
          id="outlined-basic"
          label="Task"
          variant="outlined"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          sx={{ m: ".5rem", ml: "2rem" }}
          size="large"
          variant="contained"
          onClick={addTask}
        >
          Add Task
        </Button>
      </Box>

      <Stack direction="row" sx={{ mt: "1rem" }}>
        {positions.map((position) => (
          <Stack spacing={2} sx={{ m: "1rem", minWidth: "16rem" }}>
            <h3>{position}</h3>
            {tasks.map(
              (task) =>
                task.dis &&
                task.position === position && (
                  <Box
                    sx={{
                      border: "solid 1px black",
                      borderRadius: 2,
                      width: "100%",
                      p: "1rem",
                    }}
                  >
                    <Box>{task.dis}</Box>

                    {positions.map(
                      (p) =>
                        p != position && (
                          <Button
                            sx={{ mr: ".5rem" }}
                            size="small"
                            variant="outlined"
                            onClick={() => {
                              tasks.map((t) => t.id === task.id) &&
                                (task.position = p);
                              setTasks([...tasks]);
                            }}
                          >
                            {p}
                          </Button>
                        )
                    )}

                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => {
                        const newTasks = tasks.filter((t) => t.id != task.id);
                        setTasks(newTasks);
                      }}
                    >
                      Remove
                    </Button>
                  </Box>
                )
            )}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
