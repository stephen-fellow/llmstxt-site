
# source .venv/bin/activate

.PHONY: check
check:
	uv run scripts/check.py

.PHONY: stage
stage:
	uv run scripts/stage.py

.PHONY: deploy
deploy:
	uv run scripts/deploy.py

.PHONY: clear
clear:
	uv run scripts/clear.py
