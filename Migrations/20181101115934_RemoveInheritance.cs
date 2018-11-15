using Microsoft.EntityFrameworkCore.Migrations;

namespace kamerplantModel.Migrations
{
    public partial class RemoveInheritance : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "adres",
                table: "geregistreerdeklant",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "naam",
                table: "geregistreerdeklant",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "geregistreerdeklantID",
                table: "bestellingproduct",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_bestellingproduct_geregistreerdeklantID",
                table: "bestellingproduct",
                column: "geregistreerdeklantID");

            migrationBuilder.AddForeignKey(
                name: "FK_bestellingproduct_geregistreerdeklant_geregistreerdeklantID",
                table: "bestellingproduct",
                column: "geregistreerdeklantID",
                principalTable: "geregistreerdeklant",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_bestellingproduct_geregistreerdeklant_geregistreerdeklantID",
                table: "bestellingproduct");

            migrationBuilder.DropIndex(
                name: "IX_bestellingproduct_geregistreerdeklantID",
                table: "bestellingproduct");

            migrationBuilder.DropColumn(
                name: "adres",
                table: "geregistreerdeklant");

            migrationBuilder.DropColumn(
                name: "naam",
                table: "geregistreerdeklant");

            migrationBuilder.DropColumn(
                name: "geregistreerdeklantID",
                table: "bestellingproduct");
        }
    }
}
