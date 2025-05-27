"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Loader2 } from "lucide-react";
import { answerQuestions, type AnswerQuestionsInput } from "@/ai/flows/answer-questions";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger, 
  DialogDescription, 
  DialogFooter 
} from "@/components/ui/dialog";

export function AiAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!question.trim()) {
      setError("Please enter a question.");
      return;
    }
    setIsLoading(true);
    setError("");
    setAnswer("");
    try {
      const input: AnswerQuestionsInput = { 
        question, 
        context: "Dr. Liana Cardieri Family & Cosmetic Dentistry offers a range of services including Zoom Whitening, Same-Day Crowns, and general family dentistry. The team is multilingual, speaking English, Portuguese, and Polish. The clinic has over 20 years of experience and is an ODA member. For appointments, call 519-578-5717." 
      };
      const result = await answerQuestions(input);
      setAnswer(result.answer);
    } catch (e) {
      console.error(e);
      setError("Sorry, I couldn't fetch an answer. Please try again or contact us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="lg"
          className="fixed bottom-24 right-6 md:bottom-6 md:right-6 rounded-full p-0 w-14 h-14 shadow-lg z-50 bg-brand-blue hover:bg-brand-pink text-white transition-all duration-300 transform hover:scale-110"
          aria-label="Ask AI Assistant"
        >
          <MessageSquare className="h-7 w-7" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] bg-background border-border shadow-xl rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Ask Our AI Assistant</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Have a question about our services or practice? Get a quick answer from our AI.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Textarea
            placeholder="Type your question here... e.g., 'Do you offer teeth whitening?'"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="min-h-[100px] border-input focus:ring-primary focus:border-primary text-base"
            disabled={isLoading}
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
        {isLoading && (
          <div className="flex items-center justify-center my-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-2 text-muted-foreground">Fetching your answer...</p>
          </div>
        )}
        {answer && !isLoading && (
          <Card className="mt-4 bg-secondary/50 border-border">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Answer:</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground whitespace-pre-wrap">{answer}</p>
            </CardContent>
          </Card>
        )}
        <DialogFooter className="mt-4">
          <Button type="button" variant="outline" onClick={() => {setIsOpen(false); setQuestion(""); setAnswer(""); setError("");}} disabled={isLoading}>
            Close
          </Button>
          <Button type="submit" onClick={handleSubmit} disabled={isLoading} className="bg-brand-blue hover:bg-brand-pink text-white">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Thinking...
              </>
            ) : (
              "Ask Question"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
