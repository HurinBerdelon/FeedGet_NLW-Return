import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { api } from "../../../services/api";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton.tsx";
import { Loading } from "../ScreenshotButton.tsx/Loading";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType
    onFeedbackRestart(): void
    onFeedbackSent(): void
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestart, onFeedbackSent }: FeedbackContentStepProps): JSX.Element {

    const feedbackTypeInfo = feedbackTypes[feedbackType]

    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('')
    const [isSendingFeedback, setIsSendingFeedback] = useState(false)

    async function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault()

        setIsSendingFeedback(true)

        await api.post('/feedbacks', {
            type: feedbackType,
            comment,
            screenshot
        })

        setIsSendingFeedback(false)
        onFeedbackSent()
    }

    return (
        <>
            <header>
                <button
                    type="button"
                    className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestart}
                >
                    <ArrowLeft weight="bold" className="w-4 h4" />
                </button>

                <span className="text-xl leading-6 mr-4 flex items-center gap-2 dark:text-zinc-100">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className='w-6 h-6' />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>

            <form
                className="my-4 w-full"
                onSubmit={handleSubmitFeedback}
            >
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-500 dark:placeholder-zinc-400 text-zinc-800 dark:text-zinc-100 border-zinc-300 dark:border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus-outline-none scrollbar  scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"

                    placeholder="Conte com detalhes o que est?? acontecendo..."
                    onChange={event => setComment(event.target.value)}
                />

                <footer className="flex gap-2 mt-2">

                    <ScreenshotButton
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    />

                    <button
                        type="submit"
                        disabled={comment.length === 0 || isSendingFeedback}
                        className="p-2 bg-brand-500 text-white rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:dark:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                    >
                        {isSendingFeedback ? <Loading /> : 'Enviar Feedback'}
                    </button>
                </footer>
            </form>
        </>
    )
}