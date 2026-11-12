# Test Analysis – Checkpoint 1

Analytical part of the Software Testing project.
Full documentation: [Wiki – Checkpoint 1](https://github.com/ecarnassier/Online-Clothing-Store/wiki/Checkpoint-1-%E2%80%93-Analysis)

## Structure

| Folder | Content |
|---|---|
| `combinations/` | ACTS model and generated input data combinations |
| `processes/` | process models for path-based testing |

## Input data combinations

Tested interface: product search API `GET /api/products`.
Model: `combinations/model.txt` (ACTS 3.2, algorithm IPOG).

| Coverage | Test cases | File |
|---|:---:|---|
| 2-way | 38 | `combinations-2way.csv` |
| Mixed strength | 53 | `combinations-mixed.csv` |
| 3-way | 201 | `combinations-3way.csv` |
| Exhaustive (for comparison) | 1 296 000 | – |

## Process testing

Each process has a UML activity diagram and a graph-based model
(decision points A, B, …, numbered edges) used to generate test paths.

| Process | TDL = 1 | TDL = 2 | TDL = 3 |
|---|:---:|:---:|:---:|
| Account – log in or register, add address | 2 tests | 4 tests | 8 tests |
| Wishlist | … | … | … |
| Checkout | … | … | … |
